import { projectsData } from '../data/projects'

export default function ProjectsSEO() {
  return (
    <section className="sr-only" aria-hidden="true">
      <h2>Proyectos de UX/UI y Frontend</h2>

      {projectsData.map((project, index) => (
        <article key={index}>
          <h3>{project.title}</h3>

          {project.role && (
            <p>
              <strong>Rol:</strong> {project.role}
            </p>
          )}

          {project.impact && (
            <p>
              <strong>Impacto:</strong> {project.impact}
            </p>
          )}

          <p>{project.fullDescription}</p>

          <p>
            <strong>Tecnologías:</strong> {project.technologies.join(', ')}
          </p>

          {project.features && (
            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}

          {project.liveUrl && (
            <p>
              <strong>Proyecto en producción:</strong> {project.liveUrl}
            </p>
          )}

          {project.githubUrl && (
            <p>
              <strong>Repositorio:</strong> {project.githubUrl}
            </p>
          )}
        </article>
      ))}
    </section>
  )
}
