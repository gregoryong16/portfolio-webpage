import React from 'react';
import { RiComputerFill } from 'react-icons/ri';
import { VscServerProcess } from 'react-icons/vsc';
import { IoLanguageSharp } from 'react-icons/io5';
import AnimatedPage from "./AnimatedPage";

const Skills = () => {
	return (
		<AnimatedPage>
			<div className='skillsContainer' id='skills'>
				<div className='skillsFlex'>
					<div className='flexContainer'>
						<div className='rightContainer'>
							<div className='itemContainer'>
								<span className='itemTitle'>
									<RiComputerFill size={60} color='grey' />
									<span>Programming</span>
								</span>
								<span className='itemDesc'>
									<p>
										<b>Topics:</b> <br />
										Full Stack Development, Data Science,
										Algorithms, Machine Learning, Object-Oriented Design, Database Management, Agile
										<br /> <br />
										<b>Programming:</b>
										<br />
										ReactJS, React Native, NodeJS, Java, Python, C, SQL, NoSQL
									</p>
								</span>
							</div>  
							<div className='itemContainer'>
								<span className='itemTitle'>
									<IoLanguageSharp size={60} color='grey' />
									<span>Languages</span>
								</span>
								<span className='itemDesc'>
									<p>
										<b>Fluent in:</b>
										<br />
										English , Mandarin
									</p>
								</span>
							</div> 
							<div className='itemContainer'>
								<span className='itemTitle'>
									<VscServerProcess size={60} color='grey' />
									<span>Software</span>
								</span>
								<span className='itemDesc'>
									<p>
										<b>Software used:</b>
										<br />
										Docker, AWS, IntelliJ, Visual Studio Code, Github
									</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AnimatedPage>		
	);
};

export default Skills;