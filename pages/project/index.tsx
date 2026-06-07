import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  interface Project {
    title: string
    description: string
  }
  const projectList: Project[] = [
    {
      title: 'Agent review queue portal',
      description: 'Operator UI for approvals, annotations, and replay on agentic workflows',
    },
    {
      title: 'RAG knowledge ops pipeline',
      description: 'Ingestion, hybrid retrieval, citations, and refresh jobs for support',
    },
    {
      title: 'MCP integration fabric',
      description: 'Typed tool surfaces connecting LLMs to CRM, tickets, and internal APIs',
    },
    {
      title: 'Queue-aware n8n operations',
      description: 'Sub-workflows, DLQ branches, and AI Agent nodes at production scale',
    },
  ]
  return (
    <PageTemplate title="Solutions - Sohuji">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="SOLUTIONS"
              title="Production systems for agentic AI, retrieval, and workflow automation"
            />
          </div>
        </aside>
        <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'Agentic AI', value: 'agentic' },
              { label: 'RAG', value: 'rag' },
              { label: 'n8n', value: 'n8n' },
            ]}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </div>
            )
          })}
        </div>
        <Button value="Load More" color="white" style="light" />
      </section>
    </PageTemplate>
  )
}

export default Project
