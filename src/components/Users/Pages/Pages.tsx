import React, {FunctionComponent} from 'react'
import s from './Pages.module.css'

interface OwnProps {
  totalCount: number
  currentPage: number
  pageSize: number
  setCurrentPageHandler: (currentPage: number) => void
}

type Props = OwnProps;

const Pages: FunctionComponent<Props> = (props) => {
  const pages: number[] = []
  const pagesCount = Math.ceil(props.totalCount / props.pageSize)

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (<>
    {pages.map(page => <span
      key={page}
      onClick={() => props.setCurrentPageHandler(page)}
      className={page === props.currentPage ? s.active : s.page}
    >
      {page + ' '}
    </span>)}
  </>);
};

export default Pages;
