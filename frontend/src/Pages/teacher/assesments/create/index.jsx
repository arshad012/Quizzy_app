import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useHeading } from "../../../../Hooks"
import CustomInputs from '../../../../Components/Common/inputs/CustomeInputs'
import { InputTypes } from "../../../../Components/Common/inputs/CustomeInputs/types";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { setAssesmentKey } from "../../../../Store/feature/assesments/assesmentSlice";

import { resetAssesmentState } from "../../../../Store/feature/assesments/assesmentSlice";
import { useGetAssesmentQuery } from "../../../../Store/feature/assesments/api";
import { useGetAllTemplatesQuery } from "../../../../Store/feature/template/api/getAllTemplatesApi";
import CreateAssesmentButton from "../../../../Components/Teacher/Assesments/CreateAssesmentButton";
import FullQuestionComponent from "../../../../Components/Common/Question/FullQuestionComponent";
import AuthFailed from "../../../../Components/AuthFailed";
import SomethingWrong from "../../../../Components/SomethingWrong";


function CreateAssesmentPage() {
    const { id } = useParams();
    console.log('id:', id)
    const { isLoading } = useGetAssesmentQuery(id, {
        refetchOnMountOrArgChange: true,
        skip: !id
    });
    const { data: templates = [], error } = useGetAllTemplatesQuery();
    const { template, title, description, questions = [] } = useSelector(assesmentsSelector);

    const { setHeading, setSubHeading } = useHeading();
    const dispatch = useDispatch();

    useEffect(() => {
        setHeading('Create Assesment');
        setSubHeading('This will help you create multiple assesments');

        return () => {
            dispatch(
                resetAssesmentState()
            )
        }
    }, [])


    const handleChange = (key, value) => {
        dispatch(
            setAssesmentKey({ key, value })
        )
    }

    if (error && error?.data?.authenticationFailed) {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }


    return (
        <div className="max-h-full overflow-auto bg-white">
            {!id &&
                <div>
                    <form className="flex flex-col gap-4">
                        <CustomInputs
                            inputType={InputTypes.DROP_DOWN}
                            label="Select Template"
                            value={template || "Choose from Templates"}
                            onChange={(value) => handleChange("template", value)}
                            options={templates.map((template) => ({ id: template._id, label: template.title }))}
                        />
                        <CustomInputs
                            inputType={InputTypes.TEXT}
                            value={title}
                            onChange={(value) => handleChange("title", value)}
                            label="Assesment Title"
                            placeholder="e.g, Math Quiz 1.0"
                        />
                        <CustomInputs
                            inputType={InputTypes.MULTILINE}
                            value={description}
                            onChange={(value) => handleChange("description", value)}
                            label="Assesment Description"
                            placeholder="e.g, This is a quiz to test your knowledge"
                        />

                    </form>

                    <CreateAssesmentButton />
                </div>
            }

            {questions.length != 0 &&
                <div>
                    <h1 className="text-xl font-bold">Generated Questions</h1>
                    <div className="flex flex-col gap-6 mt-4">
                        {
                            questions.map((question, i) => (
                                <FullQuestionComponent key={i} question={question} index={i} />
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateAssesmentPage