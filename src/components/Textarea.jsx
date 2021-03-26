import Title from './Title';

const Textarea = ({ changeHandler, value }) => {
	return (
		<>
			<Title text='Insert your Markdown' classes='subtitle subtitle-1' />
			<textarea
				id='editor'
				onChange={changeHandler}
				value={value}
				cols='45'
				rows='35'></textarea>
		</>
	);
};

export default Textarea;
