import React from 'react';
import Button from '../button/Button';

export type ButtonType = {
  title: string;
  onClick: () => void;
  color: 'primary' | 'secondary';
};

type ModalProps = {
  header?: string;
  headerIcon?: string;
  buttons?: ButtonType[];
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  className?: string;
  hideModal: (val: boolean) => void;
};

const Modal = (props: ModalProps) => {
  const {
    header,
    headerIcon,
    buttons,
    children,
    headerClassName,
    bodyClassName,
    footerClassName,
    className,
    hideModal,
    ...restProps
  } = props;
  const dialogContentClass = `modal-content ${className ?? ''}`;
  const dialogHeaderClass = `modal-header ${headerClassName ?? ''}`;
  const dialogBodyClass = `modal-body ${bodyClassName ?? ''}`;
  const dialogFooterClass = `modal-footer ${footerClassName ?? ''}`;

  return (
    <div className="modal">
      <div className={dialogContentClass} {...restProps}>
        <div className={dialogHeaderClass}>
        
            <div>
               {header}
            </div>
            <div
              onClick={() => hideModal(false)}
              className="close-icon-container"
            >
             x
            </div>
         
        </div>
        <div className={dialogBodyClass}>{children}</div>
        {buttons?.length && (
          <div className={dialogFooterClass}>
            {buttons?.map((button) => (
              <Button
                key={button?.title?.toString()}
                buttonText={button.title ?? ''}
                buttonType={button.color ?? 'primary'}
                className={
                  buttons.length === 1 ? 'big-modal-button' : 'modal-button'
                }
                onClick={() => button.onClick()}
              / >
               
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
