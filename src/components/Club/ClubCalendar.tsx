import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

export interface ClubCalendarProps {
	className?: string;
}

const ClubCalendar: React.FC<ClubCalendarProps> = ({ className }) => {
	return (
		<div className={`pt-4 ${className ? className : ''}`}>
			<FullCalendar initialView="timeGridWeek" locale="sl" plugins={[timeGridPlugin]} />
		</div>
	);
};

export default ClubCalendar;
