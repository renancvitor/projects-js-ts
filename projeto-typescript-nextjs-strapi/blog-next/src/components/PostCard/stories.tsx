import {StoryFn, Meta} from '@storybook/react';

import { PostCard, PostCardProps } from ".";
import React from 'react';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta;

export const Primary: StoryFn<PostCardProps> = (args) => <PostCard {...args} />;
