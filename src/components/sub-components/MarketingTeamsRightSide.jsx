import { ChartBarIcon } from "@heroicons/react/24/outline";

function MarketingTeamsRightSide({ tab }) {
    if (tab === "marketingTeams") {
        return (
            <div className="bg-[#0c0c12] rounded-ss-lg w-full h-full border-t-2 border-s-2 border-gray-900">
                <div className="flex p-3">
                    <div>
                        <ChartBarIcon className='h-6 text-gray-500' />
                    </div>
                    <div>
                        Marketing Campaign Launch
                    </div>
                </div>
            </div>
        )
    } else if (tab === "itTeams") {
        return (
            <div className="bg-[#0c0c12] rounded-ss-lg w-full h-full border-t-2 border-s-2 border-gray-900">MarketingTeamsRightSide</div>
        )
    } else if (tab === "operations") {
        return (
            <div className="bg-[#0c0c12] rounded-ss-lg w-full h-full border-t-2 border-s-2 border-gray-900">MarketingTeamsRightSide</div>
        )
    } else if (tab === "project") {
        return (
            <div className="bg-[#0c0c12] rounded-ss-lg w-full h-full border-t-2 border-s-2 border-gray-900">MarketingTeamsRightSide</div>
        )
    }
}

export default MarketingTeamsRightSide;