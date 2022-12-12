import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  events?: CupertinoSettings["events"];
};

export const Pane = ({ children, events }: Props) => {
  const [pane, setPane] = useState<CupertinoPane | undefined>(undefined);
  useEffect(() => {
    setPane((current) => {
      if (current !== undefined) return current;

      return new CupertinoPane(
        ".cupertino-pane", // Pane container selector
        {
          parentElement: "body", // Parent container
          breaks: {
            middle: { enabled: true, height: 300, bounce: true },
            bottom: { enabled: true, height: 80 },
          },
          events: events,
        }
      );
    });
  }, [events]);

  useEffect(() => {
    pane?.present({ animate: true });
  }, [pane]);

  return <div className="cupertino-pane mx-6 mt-8">{children}</div>;
};
