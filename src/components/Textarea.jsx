const Textarea = ({ changeHandler, value }) => {
	return (
		<textarea
			id='editor'
			onChange={changeHandler}
			value={value}
			cols='45'
			rows='35'></textarea>
	);
};

export default Textarea;
