import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export default (props: LessonProps) => {

  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'MM", {locale: ptBR});

  const isActiveLesson = slug === props.slug;

  return(
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      
      <div className={classNames("p-4 mt-2 rounded border border-gray-500 group-hover:border-green-500", {
        "bg-green-500": isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
              <span className={classNames("text-sm text-blue-500 font-medium flex items-center gap-2", {
                "text-white": isActiveLesson
              })}>
                <CheckCircle size={20}/>
                Conteúdo liberado
              </span>
            )
            : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20}/>
                Em breve
              </span>
            )
          }
          <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold", {
            "border-white": isActiveLesson
          })}>
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className={classNames("block mt-5", {
          "text-white": isActiveLesson,
          "text-gray-200": !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
}