import marked from 'marked';
import Title from './Title';

const Previewer = ({ text }) => {
	const markdown = marked(text, { breaks: true });

	return (
		<>
			<Title text='Result:' classes='subtitle subtitle-2' />
			<div id='preview' dangerouslySetInnerHTML={{ __html: markdown }}></div>
		</>
	);
};

export default Previewer;
