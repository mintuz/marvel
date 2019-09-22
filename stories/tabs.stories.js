import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import { Tabs, Tab } from '../src/Components/Tabs'

export default {
    title: '3. Components|Tabs',
}

export const tabs = () => (
    <Theme>
        <Tabs activeTab="item2">
            <Tab title="Item 1" id="item1">
                <h2>Item 1 html</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa cupiditate sed repellendus accusantium saepe
                    numquam dolores fugiat. Similique nesciunt placeat odit
                    possimus natus quo eos assumenda porro ex reprehenderit sed
                    aliquid nostrum vero, at ut deserunt quas distinctio
                    obcaecati itaque quia nulla. Eius sequi amet veritatis ipsa
                    aliquam quibusdam architecto perspiciatis dolorem molestiae
                    est, aspernatur laboriosam. Commodi numquam incidunt,
                    necessitatibus sint, neque quos rem aperiam enim, ab ipsa
                    tempore saepe. Explicabo quam vero, veniam dicta aspernatur,
                    excepturi ullam repellendus voluptatibus unde quibusdam
                    perspiciatis minus. Ex nisi quia nemo tenetur repudiandae
                    quasi, vero dignissimos aut aperiam temporibus, natus eos
                    quis.
                </p>
            </Tab>
            <Tab title="Item 2" id="item2">
                <h2>Item 1 html</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa cupiditate sed repellendus accusantium saepe
                    numquam dolores fugiat. Similique nesciunt placeat odit
                    possimus natus quo eos assumenda porro ex reprehenderit sed
                    aliquid nostrum vero, at ut deserunt quas distinctio
                    obcaecati itaque quia nulla. Eius sequi amet veritatis ipsa
                    aliquam quibusdam architecto perspiciatis dolorem molestiae
                    est, aspernatur laboriosam. Commodi numquam incidunt,
                    necessitatibus sint, neque quos rem aperiam enim, ab ipsa
                    tempore saepe. Explicabo quam vero, veniam dicta aspernatur,
                    excepturi ullam repellendus voluptatibus unde quibusdam
                    perspiciatis minus. Ex nisi quia nemo tenetur repudiandae
                    quasi, vero dignissimos aut aperiam temporibus, natus eos
                    quis.
                </p>
            </Tab>
            <Tab title="Item 3" id="item3">
                <h2>Item 1 html</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa cupiditate sed repellendus accusantium saepe
                    numquam dolores fugiat. Similique nesciunt placeat odit
                    possimus natus quo eos assumenda porro ex reprehenderit sed
                    aliquid nostrum vero, at ut deserunt quas distinctio
                    obcaecati itaque quia nulla. Eius sequi amet veritatis ipsa
                    aliquam quibusdam architecto perspiciatis dolorem molestiae
                    est, aspernatur laboriosam. Commodi numquam incidunt,
                    necessitatibus sint, neque quos rem aperiam enim, ab ipsa
                    tempore saepe. Explicabo quam vero, veniam dicta aspernatur,
                    excepturi ullam repellendus voluptatibus unde quibusdam
                    perspiciatis minus. Ex nisi quia nemo tenetur repudiandae
                    quasi, vero dignissimos aut aperiam temporibus, natus eos
                    quis.
                </p>
            </Tab>
        </Tabs>
    </Theme>
)

tabs.story = {
    name: 'Default',
}
