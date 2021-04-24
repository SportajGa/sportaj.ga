import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const ClubCalendar: React.FC = () => {
	return (
		<div className="pt-4">
			<FullCalendar initialView="timeGridWeek" locale="sl" plugins={[timeGridPlugin]} />
		</div>
	);
};

export default ClubCalendar;
