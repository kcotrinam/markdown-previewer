import React, { useState } from 'react';
import marked from 'marked';

const INIIAL_STATE = `
this is a paragraph
**This is bolded text**
# Heading
## Heading 2
***this is a quote***
> Block Quotes!
***this is a list***
- list item 1
- list item 2
- list item 3
***this is a link***
[visit this website](https://github.com/cvilla714)
***this is an inline***  \`<div></div>\`
***this is a blog of code*** : 
\`\`\`
const magna = document.querySelector("youelement")
\`\`\`
***this is an image***
![Onepice](https://images.pexels.com/photos/1165049/pexels-photo-1165049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)
`;

// console.log(INIIAL_STATE, { breaks: true });

const App = () => {
	const [markedText, setMarkedText] = useState(INIIAL_STATE);
	const markdown = marked(markedText, { breaks: true });
	const handleChange = (e) => {
		setMarkedText(e.target.value);
	};

	return (
		<>
			<textarea
				id='editor'
				type='text'
				value={markedText}
				onChange={handleChange}
			/>
			<p id='preview' dangerouslySetInnerHTML={{ __html: markdown }}></p>
		</>
	);
};

export default App;
