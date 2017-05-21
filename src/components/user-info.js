import React from 'react'

const UserInfo = () => (
    <section className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/7395304?v=' alt='User' />
      <h1>
          <a href='http://github.com/baltazarparra'>Baltazar Parra</a>
      </h1>
      <ul className='repos-info'>
          <li>Repositórios: 132</li>
          <li>Seguidores: 12</li>
          <li>Seguindo: 47</li>
      </ul>
    </section>
)

export default UserInfo