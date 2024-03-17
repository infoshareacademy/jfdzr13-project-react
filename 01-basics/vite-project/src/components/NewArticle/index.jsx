import React from 'react'
import NewArticleItem from './item'
import './style.css'

const NewArticle = () => {
  return (
    <main>
        <h1 class="NewArticle-header">New</h1>
        <NewArticleItem></NewArticleItem>
        <div className='NewArticle-underline'></div>
        <NewArticleItem></NewArticleItem>
        <div className='NewArticle-underline'></div>
        <NewArticleItem></NewArticleItem>
    </main>
  )
}

export default NewArticle