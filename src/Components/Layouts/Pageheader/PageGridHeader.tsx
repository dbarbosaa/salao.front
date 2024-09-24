import styles from './Pageheader.module.scss';

interface PageGridHeaderType {
  titles: string;
  active: string;
  children?: any
}

const PageGridHeader = ({
  titles,
  active,
  children
}: PageGridHeaderType) => {

  return (
    <div className={styles.Pageheader}>
      <div className="breadcrumb-header justify-content-between">
        <div className="my-auto">
          <div className="d-flex">
            <h4 className="content-title mb-0 my-auto">{titles}</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ {active}</span>
          </div>
        </div>
        <div className="d-sm-flex">
          <div className="d-flex my-xl-auto right-content">
           {children}
          </div>
        </div>
      </div>
    </div>
  )
};

PageGridHeader.defaultProps = {};

export default PageGridHeader;
