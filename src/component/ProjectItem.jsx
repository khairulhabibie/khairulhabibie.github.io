import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectItem({ title, body, imgUrl, tags, link }) {
  return (
    <section className="p-4 mb-4 text-sm border border-gray-500 rounded-md aspect-square">
      <div className="overflow-hidden sm:h-1/3">
        <h1 className="text-lg font-bold h-1/3">{title}</h1>
        <p className="mb-2 overflow-hidden text-sm text-gray-400 h-1/3 break-keep">
          {body}
        </p>
        <p className="h-1/2">{tags.map((tag) => `#${tag} `)}</p>
      </div>
      <figure className="overflow-y-hidden contaier sm:h-2/3">
        <img className="w-full" src={imgUrl} alt={title} />
      </figure>
      <div className="font-bold text-right text-blue-300">
        <Link to={`/projects/${link}`}>
          See more
          {'>> '}
        </Link>
      </div>
    </section>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectItem;
