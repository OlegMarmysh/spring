import React, { useState } from 'react'
import style from './Projects.module.scss'
import SpringProject from './SpringProject/SpringProjects'
import springBoot from '../image/spring-boot.svg'
import springFramework from '../image/spring-framework.svg'
import springData from '../image/spring-data.svg'
import springCloud from '../image/spring-cloud.svg'
import springPlatfrom from '../image/logo-io-platform.png'
import springEd from '../image/spring-ed.svg'

const Projects = () => {
  const state = {
    springProjects: [
      {
        img: springBoot,
        title: 'Spring boot',
        body: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible'
      },
      {
        img: springFramework,
        title: 'Spring framework',
        body: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.'
      },
      {
        img: springData,
        title: 'Spring data',
        body: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
      },
      {
        img: springCloud,
        title: 'Spring cloud',
        body: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
      }
    ],
    springAtticProjects: [
      {
        img: springPlatfrom,
        title: 'Spring IO Platform',
        body: 'Provides a cohesive, versioned platform for building modern applications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies.'
      },
      {
        img: springEd,
        title: 'Spring Flex',
        body: 'A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the front-end client.'
      },
      {
        img: springEd,
        title: 'Spring integration Groovy DSL',
        body: 'A Groovy based DSL for developing Spring Integration applications.'
      },
      {
        img: springEd,
        title: 'Spring integration Scala DSL',
        body: 'A Scala based DSL for developing Spring Integration applications.'
      }
    ]
  }
  const [inputValue, setInputValue] = useState('')
  const search = new RegExp(inputValue, 'i')
  const filteredSpringProject = state.springProjects.filter((el) => search.test(el.title))
  const filteredSpringAtticProject = state.springAtticProjects.filter((el) => search.test(el.title))
  const createSpringProject = filteredSpringProject.length
    ? filteredSpringProject.map((el) => (
      <SpringProject
        key={el.title}
        img={el.img}
        title={el.title}
        body={el.body}
      />
    ))
    : 'No results'
  const createSpringAtticProject = filteredSpringAtticProject.length
    ? filteredSpringAtticProject.map((el) => (
      <SpringProject
        key={el.title}
        img={el.img}
        title={el.title}
        body={el.body}
      />
    ))
    : 'No results'
  const onInputChange = (e) => {
    setInputValue(e.currentTarget.value)
  }
  return (
    <section>
      <div className={style.wrapperBlock}>
        <div className={style.searchBlock}>
          <input
            className={style.placeForSearch}
            value={inputValue}
            onChange={onInputChange}
            type="text"
            placeholder="Search..."
          />
          <button className={style.searchButton} />
        </div>
        <div className={style.springProjects}>
          {createSpringProject}
        </div>
        <div className={style.springAtticProjects}>
          <h3>Projects in the Attic</h3>
          <div className={style.springProjects}>
            {createSpringAtticProject}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
