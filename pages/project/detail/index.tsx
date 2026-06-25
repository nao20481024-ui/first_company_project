import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const ProjectDetail = () => {
  interface Project {
    title: string
    description: string
  }
  const projectList: Project[] = [
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
    <PageTemplate title='Solution Detail - Dokyoai'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="SOLUTION"
            title="Agent review queue portal"
            description="Operator UI for approvals, annotations, and replay on top of agentic workflows—with eval labels feeding back into retrieval and prompt versions."
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <LazyCard bottomSquareSize="big" height={400} />
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="A Next.js operator console on top of n8n-backed agent runs: review queues, HITL checkpoints, structured tool outputs, and replay without touching raw workflow JSON."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Agentic AI & operator UI" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Enterprise support ops" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="STACK" textStyle="ProjectDetailLabel" />
              <Text
                value="Next.js, n8n, LLM tool calling, OpenTelemetry"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <PageSentence
            badge="RELATED"
            title="More production systems in the same vein"
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </div>
            )
          })}
        </div>
      </section>
    </PageTemplate>
  )
}

export default ProjectDetail
