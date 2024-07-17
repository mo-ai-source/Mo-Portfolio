import ReactDOM from 'react-dom'
import React, { memo, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Global, Frame, Title, Content, toggle, AdaptiveContent, ProjectContent } from './styles'
import * as Icons from './icons'

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
            <Title style={style}>{name}</Title>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind}>
                    {children}
                </a.div>
            </Content>
        </Frame>
    )
})



const App = () => (
    <div style={{ minHeight: '100vh' }}>
        <Global />
        <Tree name="main" defaultOpen>
            <Tree name="hello" >
                <AdaptiveContent>
                    <h2>Hello, I'm Mohamed Yusuf</h2>
                    <p>Welcome to my portfolio! I'm an MSc Electronic and Computer Engineering student at the University of Birmingham with a First Class BSc in Computer Science from the University of Reading.</p>

                </AdaptiveContent>
            </Tree>

            <Tree name="projects">
                <Tree name="Text to Video Model" style={{ color: '#37ceff' }}/>
                <Tree name="Operating System" style={{ color: '#37ceff' }}/>
                <Tree name="Carter Drill" style={{ color: '#37ceff' }} />
                <Tree name="Coding Challenge">
                    <Tree name="Description">
                        <AdaptiveContent>
                          <p>  Welcome to my Coding Challenges section! Here, I showcase my solutions to the weekly coding challenges created by <a href="https://www.linkedin.com/in/johncrickett/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer" style={{ color: '#37ceff' }}>John Crickett</a></p>
                        </AdaptiveContent>
                    </Tree>
                    <Tree name="Space Invaders" style={{ color: '#37ceff' }}>
                        <ProjectContent>
                            <img src="minesweeper.gif" alt="Space Invaders game preview" />
                            <div className="project-info">
                                <h3>Space Invaders</h3>
                                <p>Classic Space Invaders Implementation. Features multiple levels and power-ups.</p>
                                <div className="tech-tags">
                                    {['Python', 'Pygame', 'OOP'].map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </ProjectContent>
                    </Tree>
                    <Tree name="Spotify Playlist" style={{ color: '#37ceff' }} >
                        <ProjectContent>
                            <img src="spotify.gif" alt="Spotify preview" />
                            <div className="project-info">
                                <h3>Spotify Playlist Backup</h3>
                                <p>
                                    This project is a custom-built Spotify playlist backup tool, designed to address the common concern of preserving carefully curated playlists. 
                                </p>
                                <div className="tech-tags">
                                    {['React', 'Spotify API', 'Web Design'].map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </ProjectContent>
                    </Tree>

                    
                </Tree>
                
            </Tree>
            <Tree name="library" >
                <Tree name="Zero to One by Blake Masters " style={{color: '#37ceff'}} />
                <Tree name="The Code Book By Simon Singh" style={{ color: '#37ceff' }} />
                <Tree name="Assata: An Autobiography by Assata Shakur" style={{ color: '#37ceff' }} />
                <Tree name="Prisoners of Geography By Tim Marshall" style={{ color: '#37ceff' }} />
            </Tree>
            <Tree name="world" />
            
        </Tree>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
