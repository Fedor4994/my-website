import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from "./ProjectsLoader.module.css";

export const ProjectsLoader = () => {
  return (
    <>
      <div className={s.loader}>
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    </>
  );
};

const SkeletonLoader = () => {
  return (
    <div>
      <div>
        <Skeleton height={300} />
      </div>
      <div>
        <h5>
          <Skeleton height={20} width={270} />
        </h5>
      </div>
    </div>
  );
};
