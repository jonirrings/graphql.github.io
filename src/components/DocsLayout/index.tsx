import React from "react"
import { Link } from "gatsby"
import DocsSidebar from "../DocsSidebar"
import Marked from '../Marked'

interface Props {
  title: string
  nextDoc: any
  permalink: string
  sideBarData: any
  rawMarkdownBody: string
}

const index = ({ title, nextDoc, sideBarData, rawMarkdownBody }: Props) => {
  return (
    <section>
      <div className="documentationContent">
        <div className="inner-content">
          <h1>{title}</h1>
          <Marked>{rawMarkdownBody}</Marked>
          {nextDoc?.frontmatter?.permalink && (
            <Link className="read-next" to={nextDoc.frontmatter.permalink}>
              <span className="read-next-continue">
                继续阅读 &rarr;
              </span>
              <span className="read-next-title">
                {nextDoc.frontmatter.title}
              </span>
            </Link>
          )}
        </div>
        <DocsSidebar sideBarData={sideBarData} />
      </div>
    </section>
  )
}

export default index
