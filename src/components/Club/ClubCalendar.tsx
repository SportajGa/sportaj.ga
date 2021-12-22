import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import useTranslation from 'next-translate/useTranslation';

export interface ClubCalendarProps {
	className?: string;
}

const ClubCalendar: React.FC<ClubCalendarProps> = ({ className }) => {
	const { lang } = useTranslation();

	return (
		<div className={`pt-4 ${className ?? ''}`}>
			<FullCalendar initialView="timeGridWeek" locale={lang} plugins={[timeGridPlugin]} />
		</div>
	);
};

export default ClubCalendar;
