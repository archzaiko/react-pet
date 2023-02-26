import { Link } from 'react-router-dom';

export function ErrorPage(): JSX.Element {
  return (
    <div>
      <div>Page was not found</div>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
}
