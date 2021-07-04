import { Component } from 'solid-js';


const PrivateLayout: Component = (props) => (
    <section className="px-4 py-10 text-gray-700 dark:text-gray-200">
        <div class="lg:w-3/4 m-auto">
            {props.children}
        </div>
    </section>
);

export default PrivateLayout;
