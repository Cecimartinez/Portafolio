export const Paragrap = ({content , type, classname}) => {
  return (
    <p className={classname} type={type}>{content}</p>
  )
}