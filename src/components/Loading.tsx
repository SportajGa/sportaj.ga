import React from 'react';

const Loading: React.FC = () => {
	return (
		<div className="w-screen h-screen">
			<div className="flex content-center items-center">
				<div className="bg-red-400">
					<svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
				</div>
			</div>
		</div>
	);
};

export default Loading;
