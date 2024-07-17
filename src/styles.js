import styled, { createGlobalStyle } from 'styled-components'
import { animated } from 'react-spring'
const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #191b21;
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
  }
  body {
    overflow-y: auto; // Change this from 'hidden' to 'auto'
  }
  html,
  body,
  div,
  a,
  i,
  button,
  select,
  option,
  optgroup,
  hr,
  br {
    user-select: none;
    cursor: default;
  }
  #root {
    padding: 30px;
    height: auto; // Add this line
    min-height: 100%; // Add this line
  }
`
const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  vertical-align: middle;
  color: white;
  fill: white;
  white-space: nowrap; // Keep this for the tree structure
  
  > div { // Target child divs (content)
    white-space: normal; // Allow wrapping for content
  }
`

const Title = styled('span')`
  vertical-align: middle;
  white-space: normal;
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`
const AdaptiveContent = styled.div`
  width: 100%;
  height: auto;
  background: black;
  border-radius: 5px;
  padding: 15px;
  color: white;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  hyphens: auto;

  h2, h3, h4 {
    color: #37ceff;
    font-size: clamp(1rem, 2vw, 1.5rem);
    white-space: normal;
    overflow-wrap: break-word;
  }

  p, li {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    white-space: normal;
    overflow-wrap: break-word;
  }

  ul {
    padding-left: 20px;
  }

  a {
    color: #37ceff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const ProjectContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: #1e2a3a;
  border-radius: 5px;
  padding: 15px;
  color: white;

  img {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .project-info {
    flex: 1 1 200px;
    min-width: 0;

    h3 {
      margin: 0 0 10px 0;
      overflow-wrap: break-word;
    }

    p {
      color: #a0a0a0;
      font-size: 14px;
      margin: 0 0 10px 0;
      overflow-wrap: break-word;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;

      span {
        background-color: #1db954;
        color: white;
        padding: 3px 7px;
        border-radius: 3px;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }
`

const toggle = {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle'
}

export { Global, Frame, Content, toggle, Title, AdaptiveContent, ProjectContent}
