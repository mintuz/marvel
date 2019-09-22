import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import Bullet from '../src/Components/Bullet'
import Icon from '../src/Components/Icon'

export default {
    title: '2. Objects|Bullet',
}

export const defaultStory = () => (
    <Theme>
        <Bullet>
            <Icon>
                <svg viewBox="0 0 128 128">
                    <path
                        d="M52 102a8 8 0 01-5.7-2.3l-28-28a8 8 0 0111.4-11.4L52 82.7l46.3-46.4a8 8 0 0111.4 11.4l-52 52A8 8 0 0152 102z"
                        fillRule="evenodd"
                    />
                </svg>
            </Icon>
            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati, laborum. Natus ducimus eligendi earum id totam animi
                voluptatum sint debitis! Totam fuga nostrum quis dolorem dolores
                officia dolor, voluptates minima.
            </span>
        </Bullet>
    </Theme>
)

defaultStory.story = {
    name: 'Default',
}
