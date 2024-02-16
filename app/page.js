"use client";

import Image from 'next/image'
import { useState , useEffect } from 'react'

//import styles from '../styles/Home.module.css'


const searchDog = async () => {
  console.log('aaaa');
  const response = await fetch("http://localhost:3000/articles");
  console.log(response);
  const res = await response.json();
  return res;
}

export default function Home({ initialCatImageUrl }) {
  const [catImage, setCatImage] = useState([]);

  const handleClick = async () => {
    const res = await searchDog();
    setCatImage(res);
  }

  useEffect(() => {
    handleClick();
  },[]);

  return (



<div>

    <div className="home-page">
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <a className="nav-link" href="">Your Feed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

            {catImage.map((catimage) => {
              return (
                <div className="article-preview" key="{catimage.id}">
                <div className="article-meta">
            <a href="/profile/eric-simons"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href="/profile/eric-simons" className="author">{catimage.title}</a>
              <span className="date">{catimage.created_at}</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> {catimage.id}
            </button>
          </div>
          <a href="http://localhost:8080/article" className="preview-link">
            <h1>{catimage.body}</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
            <ul className="tag-list">
              <li className="tag-default tag-pill tag-outline">realworld</li>
              <li className="tag-default tag-pill tag-outline">implementations</li>
            </ul>
          </a>
        </div>
              )
            })}


          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">2</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>

            <div className="tag-list">
              <a href="" className="tag-pill tag-default">programming</a>
              <a href="" className="tag-pill tag-default">javascript</a>
              <a href="" className="tag-pill tag-default">emberjs</a>
              <a href="" className="tag-pill tag-default">angularjs</a>
              <a href="" className="tag-pill tag-default">react</a>
              <a href="" className="tag-pill tag-default">mean</a>
              <a href="" className="tag-pill tag-default">node</a>
              <a href="" className="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>



</div>






  )
}
