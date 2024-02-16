//"use client";

//import Image from "next/image";
//import styles from "./page.module.css";


"use client";

import Image from 'next/image'
import { useState  } from 'react'

//import styles from '../styles/Home.module.css'



export default function Home() {
  const [ formData, setFormData] = useState({
    title: '',
    description: '',
    body: '',
    taglist: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/articles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 必要に応じて他のヘッダーを設定
          },
          body: JSON.stringify(formData),
        });
    const res = await response.json();
  }


  return (
<div class="editor-page">
  <div class="container page">
    <div class="row">
      <div class="col-md-10 offset-md-1 col-xs-12">
        <ul class="error-messages">
          <li>That title is required</li>
        </ul>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <fieldset class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Article Title" name="title" value={formData.title} onChange={handleChange}/>
            </fieldset>
            <fieldset class="form-group">
              <input type="text" class="form-control" placeholder="What's this article about?" name="description"  value={formData.description} onChange={handleChange}/>
            </fieldset>
            <fieldset class="form-group">
              <textarea
                class="form-control"
                rows="8"
                placeholder="Write your article (in markdown)"
                name="body"
                value={formData.body}
                onChange={handleChange}
              ></textarea>
            </fieldset>
            <fieldset class="form-group">
              <input type="text" class="form-control" placeholder="Enter tags" name="taglist" value={formData.taglist} onChange={handleChange}/>
              <div class="tag-list">
                <span class="tag-default tag-pill"> <i class="ion-close-round"></i> tag </span>
              </div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
              Publish Article
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}
