import React, { useEffect, useState } from 'react'
import style from './Projects.module.scss'
import SpringProject from './springProject/SpringProjects'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../redux/projectPageReducer'

const Projects = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjects())
  }, [])
  const springProjects = useSelector(state => state.projectPage.springProjects)
  const springAtticProjects = useSelector(state => state.projectPage.springAtticProjects)
  const search = new RegExp(inputValue, 'i')
  const filteredSpringProject = springProjects.filter((el) => search.test(el.title))
  const filteredSpringAtticProject = springAtticProjects.filter((el) => search.test(el.title))
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
