import greetings from './alert.js'
import style from './app.css'

let element = `
  <div class="element">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`
console.log(style);
document.write(element);
document.write(greetings("Affirmative", "Jack"));
