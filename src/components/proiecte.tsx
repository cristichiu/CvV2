import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../setPublic/scss/proiecte.scss'

import Project1 from '../../setPublic/svg/projectSVG/project1'
import Project2 from '../../setPublic/svg/projectSVG/project2'
import Project3 from '../../setPublic/svg/projectSVG/project3'
import Project4 from '../../setPublic/svg/projectSVG/project4'
import Project5 from '../../setPublic/svg/projectSVG/project5'

const Proiecte = () => {
    const [page, setPage] = useState<number>(1)
    const [maxPage, setMaxPage] = useState<number>(0)
    useEffect(() => {
        const observer = new  IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("loadingShow")
                } else {
                    entry.target.classList.remove("loadingShow")
                }
            })
        })
        const loadingHidden = document.querySelectorAll('.loadingHidden')
        loadingHidden.forEach((el) => observer.observe(el))
        const projectContainer = document.getElementsByClassName("projectContainer")
        setMaxPage(projectContainer.length)
    }, [])
    function newPage(type: "add"|"remove") {
        if(type == "add") {
            if(page >= maxPage) return
            setPage(page+1)
        }
        if(type == "remove") {
            if(page <= 1) return 
            setPage(page-1)
        }
    }
    return (<>
    <section id='proiecte'>
        <div className="content loadingHidden">
            <div className="generalContainer">
                <section className='intersectionLoading loadingHidden' id='project1'>
                    <div className='projectContainer'>
                        <div className='links'>
                            <div className='link block red'>Neterminat</div>
                            <div className='link block red'>Proiect ↩</div>
                            <a className='link' href='https://github.com/cristichiu/ChiuDB' target='sursa'>Sursă ↩</a>
                        </div>
                        <Project1 />
                        <div className="poza poza1"></div>
                    </div>
                </section>
                <section className='intersectionLoading loadingHidden' id='project2'>
                    <div className='projectContainer'>
                        <div className='links'>
                            <div className='link block'>Terminat</div>
                            <div className='link block red'>Proiect ↩</div>
                            <a className='link' href='https://github.com/cristichiu/CvV2' target='sursa'>Sursă ↩</a>
                        </div>
                        <Project2 />
                        <div className="poza poza2"></div>
                    </div>
                </section>
                <section className='intersectionLoading loadingHidden' id='project3'>
                    <div className='projectContainer'>
                        <div className='links'>
                            <div className='link block'>Terminat</div>
                            <a className='link' href='https://cv.cristichiu.repl.co/home' target='project'>Proiect ↩</a>
                            <a className='link' href='https://github.com/cristichiu/CV' target='sursa'>Sursă ↩</a>
                        </div>
                        <Project3 />
                        <div className="poza poza3"></div>
                    </div>
                </section>
                <section className='intersectionLoading loadingHidden' id='project4'>
                    <div className='projectContainer'>
                        <div className='links'>
                            <div className='link block'>Terminat</div>
                            <a className='link' href='https://moldova.cristichiu.repl.co/home' target='project'>Proiect ↩</a>
                            <a className='link' href='https://github.com/cristichiu/moldova' target='sursa'>Sursă ↩</a>
                        </div>
                        <Project4 />
                        <div className="poza poza4"></div>
                    </div>
                </section>
                <section className='intersectionLoading loadingHidden' id='project5'>
                    <div className='projectContainer'>
                        <div className='links'>
                            <div className='link block'>Terminat</div>
                            <a className='link' href='https://istoria.cristichiu.repl.co/' target='project'>Proiect ↩</a>
                            <a className='link' href='https://github.com/cristichiu/istoria' target='sursa'>Sursă ↩</a>
                        </div>
                        <Project5 />
                        <div className="poza poza5"></div>
                    </div>
                </section>
            </div>
            <div className='buttons'>
                <a onClick={() => newPage("remove")} href={`#project${page}`} className={`arrow ${page > 1 && 'active'}`}></a>
                <div className='pagenr'>{page}</div>
                <a onClick={() => newPage("add")} href={`#project${page}`} className={`arrow ${page < maxPage && 'active'}`}></a>
            </div>
        </div>
    </section>
    </>)
}

export default Proiecte