import React, { useState } from 'react';
import Previewer from './components/Preview';
import Textarea from './components/Textarea';

const INIIAL_STATE = `
this is a paragraph
**This is bolded text**
# Heading
## Heading 2
***this is a quote***
> Block Quotes!
***this is a list***
- item 1
- item 2
- item 3
***this is a link***
[github](https://github.com/cvilla714)
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
	const handleChange = (e) => {
		setMarkedText(e.target.value);
	};

	return (
		<>
			<div>
				<Textarea changeHandler={handleChange} value={markedText} />
			</div>
			<div>
				<Previewer text={markedText} />
			</div>
		</>
	);
};

export default App;
