import { useSelector } from 'react-redux';
import { JournalLayout } from '@/journal/layout';
import { NoteView, NothingSelectedView } from '@/journal/views';

export const JournalPage = () => {

	const { active } = useSelector( state => state.journal );

	return (
		<JournalLayout>
			{
				active
					? <NoteView />
					: <NothingSelectedView />
			}
		</JournalLayout>
	);
};
