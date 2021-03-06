import React from 'react'
import Post from '../components/Post/Post'
import { useAuth } from '../context/auth-context'
import { useData } from '../context/data-context'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

const Home = () => {
  const { user } = useAuth()
  const { users, posts } = useData()

  return (
    <>
      <main>
        <section className='app__posts'>
          <div className='app__postsLeft'>
            {posts.length === 0 && <h1>No Posts</h1>}
            {posts.map(({ id, post }) => (
              <Post key={id} postId={id} user={user} post={post} />
            ))}
          </div>
          <div className='app__postsRight'>
            <h1>You may also follow !</h1>
            <h2>Users</h2>
            {users.length > 0 ? (
              <>
                <ul>
                  {users?.map(({ docId, userId, displayName }) => (
                    <li className='post__header' key={docId}>
                      <Avatar
                        className='post__avatar'
                        alt='RafehQazi'
                        src={'https://ui-avatars.com/api/?name=' + displayName}
                      />
                      <Link to={`/p/${userId}`}>{displayName}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <span>no users</span>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
