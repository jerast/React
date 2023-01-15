import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '@/store';
import { ImageGallery } from '@/app';
import { useForm } from '@/hooks';

export const NoteView = () => {

	const dispatch = useDispatch();
	const { active: note, isSaving, messageSaved } = useSelector( state => state.journal );

	const { formState, body, title, date, onFormChange, } = useForm(note);

	const dateString = useMemo(() => {
			const dateParsed = new Date( date ).toLocaleString();
			return dateParsed;
		},
	[date]);
	
	// useEffect(
	// 	() => {
	// 		dispatch( setActiveNote(formState) );
	// 	}, 
	// [formState]);

	useEffect(
		() => {
			if (messageSaved.length > 0) {
				Swal.fire('Updated Note!', messageSaved, 'success');
			};
		}, 
	[messageSaved]);

	const fileInputRef = useRef();

	const onSaveNote = () => {
		dispatch( setActiveNote(formState) );
		dispatch( startSaveNote() );
	};

	const onDeleteNote = () => {
		dispatch( startDeletingNote() );
	};

	const onFileInputChange = ({ target }) => {
		dispatch( setActiveNote(formState) ); 
		
		if ( !target.files.length ) return;
		
		dispatch( startUploadingFiles( target.files ) );
	};

	return (
		<Grid 
			className="animate__animated animate__fadeIn animate__faster"
			container
			direction="row"
			justifyContent="space-between"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={ 39 } fontWeight="light">
					{ dateString }
				</Typography>
			</Grid>

			<Grid item>
				<Grid container alignItems="center" height="100%" gap={ 0.5 }>
					<input 
						type="file" 
						multiple 
						onChange={ onFileInputChange } 
						style={{ display: 'none' }} 
						ref={ fileInputRef }
					/>

					<IconButton onClick={ () => fileInputRef.current.click() } disabled={ isSaving } sx={{  }}>
						<UploadOutlined color="primary" />
					</IconButton>

					<IconButton onClick={ onSaveNote } disabled={ isSaving } sx={{  }}>
						<SaveOutlined color="primary" />
					</IconButton>

					<IconButton onClick={ onDeleteNote } disabled={ isSaving } sx={{ backgroundColor: '#F001', ml: 1 }}>
						<DeleteOutlined color="error"/>
					</IconButton>
				</Grid>
			</Grid>

			<Grid container>
				<TextField
					type="text"
					variant="filled"
					label="Title"
					name="title"
					value={ title }
					onChange={ onFormChange }
					fullWidth
					sx={{ border: 'none', mb: 1 }}
				/>

				<TextField
					type="text"
					variant="filled"
					name="body"
					value={ body }
					onChange={ onFormChange }
					multiline
					fullWidth
					placeholder="What happened today?"
					minRows={ 5 }
				/>
			</Grid>

			<ImageGallery images={ note.imageURLs } />
		</Grid>
	);
};
