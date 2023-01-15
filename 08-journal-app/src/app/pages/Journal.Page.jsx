import { JournalLayout, NoteView, NothingSelectedView } from '@/app';
import { useSelector } from 'react-redux';

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
