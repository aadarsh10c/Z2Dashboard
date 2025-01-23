import { Link } from "react-router";

function HomeComponent() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 bg-gray-100 text-center">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Welcome to the Demo
      </h1>
      <p className="text-xl max-w-2xl leading-relaxed text-gray-600">
        To view the static page demonstration, please navigate to the PageRisk
        page. You can use the navigation menu or click the link below.
      </p>
      <Link
        to="/part-risk-manager/my-data"
        className="mt-8 px-8 py-4 bg-blue-600 text-white no-underline rounded-lg text-lg 
                  transition-colors duration-300 hover:bg-blue-700"
      >
        Go to PageRisk Demo
      </Link>
    </div>
  );
}

export default HomeComponent;
