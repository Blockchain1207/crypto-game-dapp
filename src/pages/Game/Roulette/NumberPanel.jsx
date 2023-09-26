import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { setClickedPoints, setPad } from '../../../contexts/ReduxContext/reducers/roulette'
import { useDispatch, useSelector } from "react-redux"
import { points } from './config'
import './number-panel.css'

const NumberPanel = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const pad = useSelector((state) => (state).roulette.pad)
  const clickCount = useSelector((state) => state.roulette.chipCount)
  const clickedPoints = useSelector((state) => (state).roulette.clickedPoints)

  const [, setState] = useState(false);

  // const _style = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   border: 'solid 2px white',
  //   color: 'white',
  //   // boxShadow: 'inset 1px 1px #262e5c, inset -1px -1px #262e5c',
    
  //   fontSize: '16px',
  //   cursor: 'pointer',
  //   margin: '2px',
  // }

  useEffect(() => {
    const handleResize = () => {
      setState((prev) => !prev)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  const pushNewPoint = useCallback((point) => {
    const oldPoints = JSON.parse(JSON.stringify(clickedPoints))

    let flag = false
    for (let i = 0; i < oldPoints.length; i++) {
      if (point.x === oldPoints[i].x && point.y === oldPoints[i].y) {
        oldPoints[i].chips = [...oldPoints[i].chips, clickCount]
        flag = true
        break
      }
    }

    if (flag === false) {
      oldPoints.push({
        x: point.x,
        y: point.y,
        chips: [clickCount],
        value: point.values,
      })
    }
    dispatch(setClickedPoints(oldPoints))

    const _pad = pad.map((v) => ({ ...v, active: false }))
    for (const pt of oldPoints) {
      for (let i = 0; i <= 36; i++) {
        if (pt.value.includes(parseInt(pad[i].value))) {
          _pad[i].active = true
        }
      }
    }
    dispatch(setPad(_pad))
  }, [dispatch, clickedPoints, clickCount]) //eslint-disable-line

  const pointInRect = (point, x, y, unit) => {
    const _x = x / unit
    const _y = y / unit
    if (
      point.x - point.offsetX < _x &&
      point.x + point.offsetX > _x &&
      point.y - point.offsetY < _y &&
      point.y + point.offsetY > _y
    )
      return true
    return false
  }

  const handleMouseMove = (e) => {
    const x = e.clientX - ref.current.getBoundingClientRect().x
    const y = e.clientY - ref.current.getBoundingClientRect().y

    const width = ref.current.clientWidth
    const unit = width / 14

    const _pad = pad.map((v) => ({ ...v, hover: false }))

    for (const point of points) {
      if (pointInRect(point, x, y, unit)) {
        for (const value of point.values) {
          for (let i = 0; i <= 36; i++) {
            if (parseInt(pad[i].value) === value) {
              _pad[i].hover = true
            }
          }
        }
        break
      }
    }
    dispatch(setPad(_pad))
  }

  const handleMouseOut = () => {
    const _pad = pad.map((v) => ({ ...v, hover: false }))
    dispatch(setPad(_pad))
  }

  const handleClick = (e) => {
    const x = e.clientX - ref.current.getBoundingClientRect().x
    const y = e.clientY - ref.current.getBoundingClientRect().y

    const width = ref.current.clientWidth
    const unit = width / 14

    const _pad = pad.map((v) => ({ ...v }))

    for (const point of points) {
      if (pointInRect(point, x, y, unit)) {
        // setTempPoints((prev) => [...prev, point])
        pushNewPoint(point)
        break
      }
    }
    dispatch(setPad(_pad))
  }

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()

    let oldPoints = JSON.parse(JSON.stringify(clickedPoints))

    const x = e.clientX - ref.current.getBoundingClientRect().x
    const y = e.clientY - ref.current.getBoundingClientRect().y

    const width = ref.current.clientWidth
    const unit = width / 14

    for (const point of points) {
      if (pointInRect(point, x, y, unit)) {
        for (let i = oldPoints.length - 1; i >= 0; i--) {
          const p1 = oldPoints[i]
          if (point.x === p1.x && point.y === p1.y && JSON.stringify(point.values) === JSON.stringify(p1.value)) {
            if (p1.chips.length <= 1) {
              oldPoints.splice(i, 1)
            } else {
              p1.chips.splice(p1.chips.length - 1, 1)
              oldPoints = [...oldPoints.filter((p, k) => k !== i), p1]
            }
            dispatch(setClickedPoints(oldPoints))
            return
          }
        }
        break
      }
    }
  }

  return (
    <div
      className='relative grid grid-cols-14 font-medium gap-1 sm:gap-2'
      // className="bg-[#19492E] rounded-xl md:rounded-[40px] p-2 md:p-6 2xl:p-10 flex flex-col sm:flex-row sm:items-start items-center gap-1 sm:gap-2 h-full"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      ref={ref}
    >
      <>
        <div
          className={clsx(
            // 'aspect-[1/3]',
            // 'bg-green-700',
            pad[0].hover ? 'number-hover' : '',
            pad[0].active ? 'number-active' : '',
            `bg-${pad[0].color}`,
            'button-style',
          )}
        >
          {pad[0].value}
        </div>
        <div className='grid grid-cols-12 col-span-12 gap-1 sm:gap-2'>
          {pad.slice(1, 37).map((item) => {
            return (
              <div
                className={clsx(
                  'aspect-square',
                  item.hover ? 'number-hover' : '',
                  item.active ? 'number-active' : '',
                  `bg-[${item.color}]`, 'button-style',
                )}
                style={{backgroundColor: item.color }}
                key={item.value}
              >
                {item.value}
              </div>
            )
          })}
        </div>
        <div className='grid grid-rows-3 gap-1 sm:gap-2'>
          {pad.slice(37, 40).map((item) => {
            return (
              <div
                className={clsx(
                  'aspect-square',
                  item.hover ? 'number-hover' : '',
                  item.active ? 'number-active' : '',
                  `bg-[${item.color}]`,
                  'button-style',
                )}
                // style={{ backgroundColor: item.color, borderRadius: item.round ?? '' }}
                key={item.value + item.start}
              >
                {item.value}
              </div>
            )
          })}
        </div>
        <div></div>
        {pad.slice(40, 43).map((item) => {
          return (
            <div
              className={clsx(
                'col-span-4',
                'aspect-[4.64/1]',
                item.hover ? 'number-hover' : '',
                item.active ? 'number-active' : '',
                `bg-[${item.color}]`,
                'button-style',
              )}
              // style={{ backgroundColor: item.color, borderRadius: item.round ?? '' }}
              key={item.value}
            >
              {item.value}
            </div>
          )
        })}
        <div></div>
        <div></div>
        {pad.slice(43, 49).map((item, index) => {
          return (
            <div
              className={clsx(
                'col-span-2',
                'aspect-[2.21/1]',
                item.hover ? 'number-hover' : '',
                item.active ? 'number-active' : '',
                `bg-[${item.color}]`,
                'button-style',
                'text-[8px]',
                'sm:text-xs',
              )}
              // style={{ backgroundColor: item.color, borderRadius: item.round ?? '' }}
              key={item.value + index }
            >
              {item.value}
            </div>
          )
        })}
        {clickedPoints.map((point) => {
          return Array(point.chips.length)
            .fill(0)
            .map((_point, index) => {
              const unit = ref.current?.clientWidth / 14
              console.log("ppp", unit)
              return (
                
                <img
                  src={
                    point.chips[index] === 1 ? '/assets/imgs/roulette/wager-1.png' :
                    point.chips[index] === 5 ? '/assets/imgs/roulette/wager-2.png' :
                    point.chips[index] === 10 ? '/assets/imgs/roulette/wager-3.png' :
                    point.chips[index] === 20 ? '/assets/imgs/roulette/wager-4.png' :
                    '/assets/imgs/roulette/wager-5.png'
                  }
                  alt=''
                  style={{
                    position: 'absolute',
                    zIndex: index,
                    top: `${unit * (point.y - 0.3) - index}px`,
                    left: `${unit * (point.x - 0.3)}px`,
                    width: `${unit * 0.6}px`,
                    height: `${unit * 0.6}px`,
                    pointerEvents: 'none',
                  }}
                  key={'clicked'+index}
                />
              )
            })
        })}
      </>
    </div>
  )
}

export default NumberPanel
