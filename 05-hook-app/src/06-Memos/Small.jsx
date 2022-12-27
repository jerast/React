import React from "react";

export const Small = React.memo (({ value }) => {
   console.log('I regenerated myself again')

	return <small>{value}</small>;
});
