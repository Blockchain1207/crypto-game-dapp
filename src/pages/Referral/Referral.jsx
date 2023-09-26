import PageContainer from "components/PageContainer";
import ReferralCodesInfo from "./ReferralCodesInfo";
import Ranks from "./Ranks";
import Card from "components/Card";

const Referral = () => {
  return (
    <PageContainer>
      <ReferralCodesInfo />
      <Ranks />
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <div>
          <h6 className="mb-3">Your Referrals</h6>

          <Card rounded className="p-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    Player
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 border-b border-solid border-background-3 text-center">
                    Edge Volume
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 border-b border-solid border-background-3 text-end">
                    Rebate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-base font-bold text-start px-3">
                    0
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-center">
                    Cancel
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-end">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-base font-bold text-start px-3">
                    0
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-center">
                    Redeem
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-end">
                    100
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
        <div>
          <h6 className="mb-3">Rewards Distribution History</h6>

          <Card rounded className="p-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    Date
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 border-b border-solid border-background-3 text-center">
                    Amount
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 border-b border-solid border-background-3 text-end">
                    Rebate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-base font-bold text-start px-3">
                    0
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-center">
                    Cancel
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-end">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-base font-bold text-start px-3">
                    0
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-center">
                    Redeem
                  </td>
                  <td className="py-2 text-base font-bold px-3 text-end">
                    100
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      <div className="my-12">
        <h6 className="mb-3">Referral Rank</h6>

        <Card rounded className="p-6 sm:w-auto overflow-auto">
          <div className="">
            <table className="w-full min-w-[550px]">
              <thead>
                <tr>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    Player
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    Code
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    Usage
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-start border-b border-solid border-background-3">
                    Volume
                  </th>
                  <th className="text-grey-60 px-3 py-3 text-base font-grey-60 text-end border-b border-solid border-background-3">
                    Rebate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-base font-bold px-3">0</td>
                  <td className="py-2 text-base font-bold px-3">-</td>
                  <td className="py-2 text-base font-bold px-3">-</td>
                  <td className="py-2 text-base font-bold px-3">-</td>
                  <td className="py-2 text-base font-bold px-3 text-end">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Referral;
