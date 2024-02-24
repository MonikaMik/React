import Aside from './Aside.jsx';

const Content = () => {
    return ( 
        <section id='content'>
            <div>
                <h1>Content</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe cupiditate accusamus suscipit exercitationem, nisi soluta quisquam consequuntur dolor nulla! Asperiores ducimus dicta, unde voluptates veniam aperiam labore voluptas dignissimos.</p>
                <h2>Sub Header</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, possimus? Eaque neque vero eveniet quod dolore nisi dolorum! Nulla cupiditate laudantium optio repellendus repellat autem ad. Unde nostrum sapiente repudiandae in earum fuga rem assumenda, facere quo quibusdam sint minus, iusto id beatae perspiciatis ut ducimus ea itaque explicabo voluptatum.</p>
            </div>
            <Aside />
        </section>
     );
}
 
export default Content;