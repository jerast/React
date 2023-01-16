import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
	return (
		<ImageList 
			variant="masonry" 
			gap={ 12 } 
			sx={{
				width: '100%',
				columnCount: {
					xs: '2 !important',
					sm: '3 !important',
					md: '4 !important',
					lg: '5 !important',
					xl: '6 !important',
				},
			}}
		>
			{
				images.map( ({ id, url }) => (
					<ImageListItem 
						key={ id } 
						sx={{ borderRadius: 2, overflow: 'hidden' }}
					>
						<img
							src={`${ url }`}
							alt="This is a note Image"
							loading="lazy"
						/>
					</ImageListItem>
				))
			}
		</ImageList>
	);
};