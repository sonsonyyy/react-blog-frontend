import { createBrowserRouter } from 'react-router'
import PostList from './PostList'
import CreatePost from './CreatePost'
import Home from './Home'
import PostLayout from './PostLayout'
import ShowPost from './ShowPost'
import EditPost from './EditPost'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/posts',
        Component: PostLayout,
        children: [
            {
                index: true,
                Component: PostList
            },
            {
                path: 'create',
                Component: CreatePost
            },
            {
                path: ':id',
                Component: ShowPost
            },
            {
                path: ':id/edit',
                Component: EditPost
            }
        ]
    }
])
