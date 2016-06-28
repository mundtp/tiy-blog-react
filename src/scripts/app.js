const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	// Note that components you define MUST have capital letters
	var HomeView = React.createClass({
		render: function() {
			return (
				// you must return ONE element. you may not return two or more sibling
				// elements. if you want to return two elements or components, you 
				// must wrap them in an enclosing tag. 
				<div id="homeContainer">
					<Header />
					<TopWhiteCol />
					<LeftWhiteCol />
					<LeftText />
					<MidWhiteCol />
					<RightText />
					<RightWhiteCol />
					<FixedBox />
					
				</div>
				)
		}
	})

	var Header = React.createClass({
		render: function() {
			return (
				<div id="logoRel">
					<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
					<TiyLogo />	
				</div>
				)
		}
	})

	var TiyLogo = React.createClass({
		render: function() {
			return (
				<div id="logoAbs">
    				<img id="circlelogo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
				</div>
				)
		}
	})

	var TopWhiteCol = React.createClass({
		render: function() {
			return (
				<div className="topWhiteCol">
				</div>
				)
		}
	})
	
	var LeftWhiteCol = React.createClass({
		render: function() {
			return (
				<div className="leftWhiteCol">
				</div>
				)
		}
	})
	var MidWhiteCol = React.createClass({
		render: function() {
			return (
				<div className="midWhiteCol">
				</div>
				)
		}
	})
	var RightWhiteCol = React.createClass({
		render: function() {
			return (
				<div className="rightWhiteCol">
				</div>
				)
		}
	})

	var LeftText = React.createClass({
		render: function() {
			return (
				<div className="leftText">
					<p><b>
				    <font size='1px'>The Iron Yard | Houston</font></b></p>
				    <p>
				      <font size='1' px color="gray">
				        Happenings and updates from The Iron Yard in Houston, TX
				      </font>
				    </p>
				    <p className='topspace'></p>				    
				    <p className='padding'>
				      <font color="gray" size='4px'><b>Search</b></font></p>		
				    <Search />	
				</div>
				)
		}
	})

	var Search = React.createClass({
		render: function() {
			return (
				<div id="search">
      				<p className='grayborder'>
        			<font color='gray' size='1' border='1px'>Search Keywords</font>
      				</p>
   				</div>
				)
		}
	})

	var RightText = React.createClass({
		render: function() {
			return (
				<div className="rightText"><b><font size='4'>September 22 Starts a New Class of The Iron Yard Houston Students</font></b>
  					<p><i>By Brian Dorton, Campus Director at
      				<font color="2A6DB0">The Iron Yard</font> Houston</i></p><img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
   					 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia doloribus in vel possimus sit, impedit alias, asperiores laborum beatae reiciendis, error facere eveniet quas quibusdam hic eius eos. Incidunt, et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dignissimos? Vitae repudiandae minima aspernatur, eaque labore ullam natus rem dolorem consequatur sunt ea laborum delectus. Laboriosam quod, placeat neque temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dignissimos? Vitae repudiandae minima aspernatur, eaque labore ullam natus rem dolorem consequatur sunt ea laborum delectus. Laboriosam quod, placeat neque temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dignissimos? Vitae repudiandae minima aspernatur, eaque labore ullam natus rem dolorem consequatur sunt ea laborum delectus. Laboriosam quod, placeat neque temporibus!</p>
 				 </div>
				)
		}
	})

	var FixedBox = React.createClass({
		render: function() {
			return (
				<div id='fixedBox'>
   					<p className='grayborder'>
      					<font size='1'><b>Never miss a post!</b></font>
   					</p>
   					<p className='grayborder'>
     	 			<img className='squarelogo' src='http://magentanova.github.io/html-intro-1/images/ironyardlogo.png'/> 
     				 <font className='alignTop' size='1' color='gray'>
        			<font color='black'><b>tiyhouston</b></font>The Iron Yard | Houston </font>
     				 <img className='followlogo' src='http://d1qxsigluyuaz5.cloudfront.net/application/_img/socialmedia/2/follow.png'/>
    				</p>
 				 </div>
				)
		}
	})
	

	// mount the top-level component to the page.
	ReactDOM.render(<HomeView />, document.querySelector('.container'))
}

app()