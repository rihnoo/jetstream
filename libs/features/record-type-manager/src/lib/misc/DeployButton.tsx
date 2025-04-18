import { formatNumber } from '@jetstream/shared/ui-utils';
import { Maybe } from '@jetstream/types';
import { Tooltip } from '@jetstream/ui';
import { Fragment } from 'react';
import { RecordTypePicklistSummary } from '../types/record-types.types';

interface DeployButtonProps {
  modifiedValues: RecordTypePicklistSummary[];
  configurationErrors?: Maybe<Record<string, Record<string, string[]>>>;
  handleDeploy: () => void;
}

export function DeployButton({ modifiedValues, configurationErrors, handleDeploy }: DeployButtonProps) {
  const hasModifiedValue = modifiedValues.length !== 0;

  const buttonLabel = hasModifiedValue ? `Deploy Changes (${formatNumber(modifiedValues.length)})` : 'Deploy Changes';

  const deployButton = (
    <button
      className="slds-button slds-button_brand"
      disabled={!!configurationErrors || modifiedValues.length === 0}
      onClick={handleDeploy}
    >
      {buttonLabel}
    </button>
  );

  if (!hasModifiedValue) {
    <Tooltip content="Change one or more values to enable deployment.">{deployButton}</Tooltip>;
  }

  if (!configurationErrors) {
    return deployButton;
  }

  const tooltipContent = (
    <>
      <p>Resolve the following errors before deploying:</p>
      <ul className="">
        {Object.entries(configurationErrors).map(([sobject, errorsByType]) => (
          <Fragment key={sobject}>
            <li>{sobject}</li>
            <li>
              <ul className=" slds-is-nested">
                {Object.entries(errorsByType).map(([field, errors]) => (
                  <Fragment key={field}>
                    <li>{field}</li>
                    <li>
                      <ul className=" slds-is-nested">
                        {Array.from(new Set(errors)).map((error) => (
                          <li key={error}>{error}</li>
                        ))}
                      </ul>
                    </li>
                  </Fragment>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ul>
    </>
  );
  return <Tooltip content={tooltipContent}>{deployButton}</Tooltip>;
}
