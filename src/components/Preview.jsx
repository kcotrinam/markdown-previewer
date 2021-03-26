import marked from 'marked';

const Previewer = ({ text }) => {
	const markdown = marked(text, { breaks: true });

	return (
		<div id='preview' dangerouslySetInnerHTML={{ __html: markdown }}></div>
	);
};

export default Previewer;
